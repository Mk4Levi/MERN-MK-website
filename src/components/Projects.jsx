import React, { useEffect } from "react";
import { motion } from "framer-motion";
// import { useProjects } from "../contexts/ProjectsContext";
import { useSelector, useDispatch } from "react-redux";
import { fetchProjectsData } from "../actions/projectActions";

const Projects = () => {
  // const { projects } = useProjects();
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.data);
  console.log(projects);

  useEffect(() => {
    dispatch(fetchProjectsData());
  }, [dispatch]);

  return (
    <div>
      {projects && (
        <div className="pb-4">
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="my-20 text-blue-200 text-center text-4xl"
          >
            Projects I've worked on recently
          </motion.h1>
          <div>
            {projects.map((project, i) => (
              <div
                key={i + 1}
                className="mb-8 mt-20 flex flex-wrap lg:justify-evenly"
              >
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 1 }}
                  className="w-full lg:w-1/4"
                >
                  <a href={project.link} target="_Blank">
                    <img
                      className="mb-6 rounded"
                      src={project.image}
                      alt={project.title}
                    />
                  </a>
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1 }}
                  className="w-full max-w-xl lg:w-3/4"
                >
                  <h6 className="mb-2 text-blue-300 font-semibold">
                    {project.title} {"|"}
                    <a href={project.github} className="" target="_Blank">
                      <span className="ml-2 mr-2 mt-2 text-green-500 text-sm font-md text-md underline">
                        SourceCode
                      </span>
                    </a>
                  </h6>
                  <p className="mb-4 text-neutral-400">{project.description}</p>
                  <div className="flex flex-wrap">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="mr-2 mt-2 rounded bg-neutral-300 px-2 py-1 text-sm font-md text-darkblue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
