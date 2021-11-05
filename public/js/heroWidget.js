import { spine } from './spine-canvas';

export default function spineWidget(heroId, canvasRef) {
    var lastFrameTime = Date.now() / 1000;
    var canvas, context;
    var assetManager;
    var skeleton, state, bounds;
    var skeletonRenderer;

	var skelName = `heroes${heroId}`;
	var animName = "Idle";

    function init() {
        canvas = document.getElementById("hero-canvas");
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		context = canvas.getContext("2d");
        canvas.getContext("2d").drawImage(canvas, 0, 0);
        console.log(context);


		skeletonRenderer = new spine.SkeletonRenderer(context);
		// enable debug rendering
		skeletonRenderer.debugRendering = false;
		// enable the triangle renderer, supports meshes, but may produce artifacts in some browsers
        skeletonRenderer.triangleRendering = true;
        console.log(skeletonRenderer);

		assetManager = new spine.AssetManager(`img/hero/hero${heroId}/`);

		assetManager.loadText(skelName + ".json");
		assetManager.loadText(skelName.replace("-pro", "").replace("-ess", "") + ".atlas");
		assetManager.loadTexture(skelName.replace("-pro", "").replace("-ess", "") + ".png");

		requestAnimationFrame(load);
	}

	function load() {
		if (assetManager.isLoadingComplete()) {
			var data = loadSkeleton(skelName, animName, "default");
			skeleton = data.skeleton;
			state = data.state;
			bounds = data.bounds;
			requestAnimationFrame(render);
		} else {
			requestAnimationFrame(load);
		}
	}

	function loadSkeleton(name, initialAnimation, skin) {
		if (skin === undefined) skin = "default";

		// Load the texture atlas using name.atlas and name.png from the AssetManager.
		// The function passed to TextureAtlas is used to resolve relative paths.
		var atlas = new spine.TextureAtlas(assetManager.require(name.replace("-pro", "").replace("-ess", "") + ".atlas"));
		atlas.setTextures(assetManager);

		// Create a AtlasAttachmentLoader, which is specific to the WebGL backend.
		var atlasLoader = new spine.AtlasAttachmentLoader(atlas);

		// Create a SkeletonJson instance for parsing the .json file.
		var skeletonJson = new spine.SkeletonJson(atlasLoader);

		// Set the scale to apply during parsing, parse the file, and create a new skeleton.
		var skeletonData = skeletonJson.readSkeletonData(assetManager.require(name + ".json"));
		var skeleton = new spine.Skeleton(skeletonData);
		skeleton.scaleY = -1;
		var bounds = calculateBounds(skeleton);
		skeleton.setSkinByName(skin);

		// Create an AnimationState, and set the initial animation in looping mode.
		var animationState = new spine.AnimationState(new spine.AnimationStateData(skeleton.data));
		animationState.setAnimation(0, initialAnimation, true);
		animationState.addListener({
			event: function (trackIndex, event) {
				// console.log("Event on track " + trackIndex + ": " + JSON.stringify(event));
			},
			complete: function (trackIndex, loopCount) {
				// console.log("Animation on track " + trackIndex + " completed, loop count: " + loopCount);
			},
			start: function (trackIndex) {
				// console.log("Animation on track " + trackIndex + " started");
			},
			end: function (trackIndex) {
				// console.log("Animation on track " + trackIndex + " ended");
			}
		})

		// Pack everything up and return to caller.
		return { skeleton: skeleton, state: animationState, bounds: bounds };
	}

	function calculateBounds(skeleton) {
		var data = skeleton.data;
		skeleton.setToSetupPose();
		skeleton.updateWorldTransform();
		var offset = new spine.Vector2();
		var size = new spine.Vector2();
		skeleton.getBounds(offset, size, []);
		return { offset: offset, size: size };
	}

	function render() {
		var now = Date.now() / 1000;
		var delta = now - lastFrameTime;
		lastFrameTime = now;

		resize();

		context.save();
		context.setTransform(1, 0, 0, 1, 0, 0);
		context.fillStyle = "#000";
		context.fillRect(0, 0, canvas.width, canvas.height);
        context.restore();

		state.update(delta*0.7);
		state.apply(skeleton);
		skeleton.updateWorldTransform();
		skeletonRenderer.draw(skeleton);

		context.strokeStyle = "transparent";
		context.beginPath();
		context.moveTo(-1000, 0);
		context.lineTo(1000, 0);
		context.moveTo(0, -1000);
		context.lineTo(0, 1000);
		context.stroke();

		requestAnimationFrame(render);
	}

	function resize() {
		var w = canvas.clientWidth;
		var h = canvas.clientHeight;
		if (canvas.width != w || canvas.height != h) {
			canvas.width = w;
			canvas.height = h;
		}

		// magic
		var centerX = bounds.offset.x + bounds.size.x / 2;
		var centerY = bounds.offset.y + bounds.size.y / 2;
		var scaleX = bounds.size.x / canvas.width;
		var scaleY = bounds.size.y / canvas.height;
		var scale = Math.max(scaleX, scaleY) * 1.2;
		if (scale < 1) scale = 1;
		var width = canvas.width * scale;
		var height = canvas.height * scale;

		context.setTransform(1, 0, 0, 1, 0, 0);
		context.scale(0.75 / scale, 0.75 / scale);
		context.translate(-centerX, -centerY);
		context.translate(width / 1.5, height / 0.9);
	}

	(function () {
		init();
	}());
}
