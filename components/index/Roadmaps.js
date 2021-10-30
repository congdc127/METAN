import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import dataRoadmap from "/public/data/roadmapData";

export default function OurTeams() {
  return (
    <div className="block block-roadmap">
      <Container>
        <Row>
          <Col md={6}>
            <h2 className="segment-heading">Roadmap</h2>
          </Col>
          <Col md={6} className="text-end">
            <img
              src="/img/roadmap-up.webp"
              className="bounce"
            ></img>
          </Col>
            <div className="roadmap-ul">
                {dataRoadmap.map((item, index) => (
                    <div className={`roadmap-item ${item.class}`} key={index} >
                    <div className="title">{item.title}</div>
                    <div className="content">
                        {item.tasks.map((task, index) => (
                        <div
                            key={index}
                            className={
                            task.isComplete ? "task-item complete" : "task-item"
                            }
                        >
                            {task.title}
                        </div>
                        ))}
                    </div>
                </div>
            ))}
          </div>
        </Row>
      </Container>
    </div>
  );
}
