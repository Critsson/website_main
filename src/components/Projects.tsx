import React from "react";
import { ScrollUp } from "./ScrollUp";
import { ProjectTile } from "./ProjectTile";
import "../styles/Projects.css";
import getWindowWidth from "../getWindowWidth";

export const Projects = () => {
  const [hoveredArray, setHoveredArray] = React.useState([
    { id: 0, hovered: false },
    { id: 1, hovered: false },
    { id: 2, hovered: false },
    { id: 3, hovered: false },
    { id: 4, hovered: false },
    { id: 5, hovered: false },
    { id: 6, hovered: false },
    { id: 7, hovered: false },
    { id: 8, hovered: false },
  ]);
  const [windowWidth, setWindowWidth] = React.useState(getWindowWidth());

  React.useEffect(() => {
    function windowResized() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener("resize", windowResized);
    return () => window.removeEventListener("resize", windowResized);
  }, []);

  const handleOnHover = (id: number) => {
    setHoveredArray((prevState) => {
      const holder = [...prevState];
      holder[id] = { id: id, hovered: true };
      return holder;
    });
  };

  const handleOffHover = (id: number) => {
    setHoveredArray((prevState) => {
      const holder = [...prevState];
      holder[id] = { id: id, hovered: false };
      return holder;
    });
  };

  return (
    <>
      {windowWidth > 640 ? (
        <div
          style={{
            height: "100vh",
            flexShrink: "0",
            scrollSnapAlign: "start",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "2vh",
          }}
          id="Projects"
        >
          <ScrollUp lastPage="Skills" />
          <div className="projects_main_container">
            <div className="projects_title_container">
              <h1>What I've Created</h1>
              <h1 className="projects_title_period">.</h1>
            </div>
            <div className="projects_flex_container">
              <div className="projects_row_container">
                <div
                  style={{
                    height: "20vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <ProjectTile
                    handleOnHover={handleOnHover}
                    handleOffHover={handleOffHover}
                    id={hoveredArray[0].id}
                    icons={[
                      "SiJavascript",
                      "SiReact",
                      "SiNextdotjs",
                      "SiHtml5",
                      "SiCss3",
                      "SiRiotgames",
                    ]}
                    thumbnail="thumbnails/climbgg_thumbnail.JPG"
                    link="https://climbgg.netlify.app/"
                    hovered={hoveredArray[0].hovered}
                    title="LoL Statistics Site"
                  />
                </div>
                <div
                  style={{
                    height: "20vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <ProjectTile
                    handleOnHover={handleOnHover}
                    handleOffHover={handleOffHover}
                    id={hoveredArray[1].id}
                    icons={[
                      "SiJavascript",
                      "SiReact",
                      "SiNextdotjs",
                      "SiHtml5",
                      "SiCss3",
                      "SiNetlify",
                    ]}
                    thumbnail="thumbnails/glorious_diaries_thumbnail.JPG"
                    link="https://gloriousdiaries-sample.netlify.app/"
                    hovered={hoveredArray[1].hovered}
                    title="Blog Site"
                  />
                </div>
                <div
                  style={{
                    height: "20vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <ProjectTile
                    handleOnHover={handleOnHover}
                    handleOffHover={handleOffHover}
                    id={hoveredArray[2].id}
                    icons={[
                      "SiTypescript",
                      "SiReact",
                      "SiPostgresql",
                      "SiExpress",
                      "SiLinux",
                      "SiNextdotjs",
                    ]}
                    thumbnail="thumbnails/chainlink_thumbnail.JPG"
                    link="https://chainlink.chrisgao.dev"
                    hovered={hoveredArray[2].hovered}
                    title="Link in Bio App"
                  />
                </div>
              </div>
              <div className="projects_row_container">
                <div
                  style={{
                    height: "20vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <ProjectTile
                    handleOnHover={handleOnHover}
                    handleOffHover={handleOffHover}
                    id={hoveredArray[3].id}
                    icons={[
                      "SiTypescript",
                      "SiReact",
                      "SiJavascript",
                      "SiExpress",
                      "SiNodedotjs",
                      "SiAmazonaws",
                    ]}
                    thumbnail="thumbnails/todo_app_thumbnail.JPG"
                    link="https://christodoapp.netlify.app/"
                    hovered={hoveredArray[3].hovered}
                    title="To-do App"
                  />
                </div>
                <div
                  style={{
                    height: "20vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <ProjectTile
                    handleOnHover={handleOnHover}
                    handleOffHover={handleOffHover}
                    id={hoveredArray[4].id}
                    icons={[
                      "SiReact",
                      "SiHtml5",
                      "SiCss3",
                      "SiJavascript",
                      "BsCloudSun",
                    ]}
                    thumbnail="thumbnails/weather_app_thumbnail.JPG"
                    link="https://chrisweatherapp.netlify.app/"
                    hovered={hoveredArray[4].hovered}
                    title="Weather Site"
                  />
                </div>
                <div
                  style={{
                    height: "20vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <ProjectTile
                    handleOnHover={handleOnHover}
                    handleOffHover={handleOffHover}
                    id={hoveredArray[5].id}
                    icons={[
                      "SiReact",
                      "SiHtml5",
                      "SiCss3",
                      "SiJavascript",
                      "SiMaterialui",
                      "DictionaryAPI",
                    ]}
                    thumbnail="thumbnails/dictionary_thumbnail.JPG"
                    link="https://chrisdictionary.netlify.app/"
                    hovered={hoveredArray[5].hovered}
                    title="Dictionary Site"
                  />
                </div>
              </div>
              <div className="projects_row_container">
                <div
                  style={{
                    height: "20vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <ProjectTile
                    handleOnHover={handleOnHover}
                    handleOffHover={handleOffHover}
                    id={hoveredArray[6].id}
                    icons={["SiJavascript", "SiHtml5", "SiCss3"]}
                    thumbnail="thumbnails/wordle_clone_thumbnail.JPG"
                    link="https://chriswordleclone.netlify.app/"
                    hovered={hoveredArray[6].hovered}
                    title="Wordle Clone"
                  />
                </div>
                <div
                  style={{
                    height: "20vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <ProjectTile
                    handleOnHover={handleOnHover}
                    handleOffHover={handleOffHover}
                    id={hoveredArray[7].id}
                    icons={[
                      "SiReact",
                      "SiHtml5",
                      "SiCss3",
                      "SiTypescript",
                      "SiMaterialui",
                    ]}
                    thumbnail="thumbnails/personal_website_thumbnail.JPG"
                    link="https://chrisgao.netlify.app/"
                    hovered={hoveredArray[7].hovered}
                    title="Personal Site"
                  />
                </div>
                <div
                  style={{
                    height: "20vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <ProjectTile
                    handleOnHover={handleOnHover}
                    handleOffHover={handleOffHover}
                    id={hoveredArray[8].id}
                    icons={[
                      "SiJavascript",
                      "SiReact",
                      "SiNextdotjs",
                      "SiHtml5",
                      "SiCss3",
                      "SiMaterialui",
                    ]}
                    thumbnail="thumbnails/parachute_notes_thumbnail.JPG"
                    link="https://dev.parachutenotes.com/"
                    hovered={hoveredArray[8].hovered}
                    title="Accordion Form UI"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            height: "100vh",
            flexShrink: "0",
            scrollSnapAlign: "start",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "7vh",
          }}
          id="Projects"
        >
          <ScrollUp lastPage="Skills" />
          <div className="projects_main_container">
            <div className="projects_title_container">
              <h1>What I've Created</h1>
              <h1 className="projects_title_period">.</h1>
            </div>
            <div className="projects_flex_container">
              <div className="projects_row_container">
                <div
                  style={{
                    height: "20vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <ProjectTile
                    handleOnHover={handleOnHover}
                    handleOffHover={handleOffHover}
                    id={hoveredArray[0].id}
                    icons={[
                      "SiJavascript",
                      "SiReact",
                      "SiNextdotjs",
                      "SiHtml5",
                      "SiCss3",
                      "SiRiotgames",
                    ]}
                    thumbnail="thumbnails/climbgg_thumbnail.JPG"
                    link="https://climbgg.netlify.app/"
                    hovered={hoveredArray[0].hovered}
                    title="LoL Statistics Site"
                  />
                </div>
                <div
                  style={{
                    height: "20vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <ProjectTile
                    handleOnHover={handleOnHover}
                    handleOffHover={handleOffHover}
                    id={hoveredArray[1].id}
                    icons={[
                      "SiJavascript",
                      "SiReact",
                      "SiNextdotjs",
                      "SiHtml5",
                      "SiCss3",
                      "SiNetlify",
                    ]}
                    thumbnail="thumbnails/glorious_diaries_thumbnail.JPG"
                    link="https://gloriousdiaries.netlify.app/"
                    hovered={hoveredArray[1].hovered}
                    title="Blog Site"
                  />
                </div>
                <div
                  style={{
                    height: "20vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <ProjectTile
                    handleOnHover={handleOnHover}
                    handleOffHover={handleOffHover}
                    id={hoveredArray[2].id}
                    icons={[
                      "SiTypescript",
                      "SiReact",
                      "SiPostgresql",
                      "SiExpress",
                      "SiLinux",
                      "SiNextdotjs",
                    ]}
                    thumbnail="thumbnails/chainlink_thumbnail.JPG"
                    link="https://chainlink.chrisgao.dev"
                    hovered={hoveredArray[2].hovered}
                    title="Link in Bio App"
                  />
                </div>
              </div>
              <div className="projects_row_container">
                <div
                  style={{
                    height: "20vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <ProjectTile
                    handleOnHover={handleOnHover}
                    handleOffHover={handleOffHover}
                    id={hoveredArray[3].id}
                    icons={[
                      "SiTypescript",
                      "SiReact",
                      "SiJavascript",
                      "SiExpress",
                      "SiNodedotjs",
                      "SiAmazonaws",
                    ]}
                    thumbnail="thumbnails/todo_app_thumbnail.JPG"
                    link="https://christodoapp.netlify.app/"
                    hovered={hoveredArray[3].hovered}
                    title="To-do App"
                  />
                </div>
                <div
                  style={{
                    height: "20vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <ProjectTile
                    handleOnHover={handleOnHover}
                    handleOffHover={handleOffHover}
                    id={hoveredArray[4].id}
                    icons={[
                      "SiReact",
                      "SiHtml5",
                      "SiCss3",
                      "SiJavascript",
                      "BsCloudSun",
                    ]}
                    thumbnail="thumbnails/weather_app_thumbnail.JPG"
                    link="https://chrisweatherapp.netlify.app/"
                    hovered={hoveredArray[4].hovered}
                    title="Weather Site"
                  />
                </div>
                <div
                  style={{
                    height: "20vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <ProjectTile
                    handleOnHover={handleOnHover}
                    handleOffHover={handleOffHover}
                    id={hoveredArray[5].id}
                    icons={[
                      "SiReact",
                      "SiHtml5",
                      "SiCss3",
                      "SiJavascript",
                      "SiMaterialui",
                      "DictionaryAPI",
                    ]}
                    thumbnail="thumbnails/dictionary_thumbnail.JPG"
                    link="https://chrisdictionary.netlify.app/"
                    hovered={hoveredArray[5].hovered}
                    title="Dictionary Site"
                  />
                </div>
              </div>
              <div className="projects_row_container">
                <div
                  style={{
                    height: "20vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <ProjectTile
                    handleOnHover={handleOnHover}
                    handleOffHover={handleOffHover}
                    id={hoveredArray[6].id}
                    icons={["SiJavascript", "SiHtml5", "SiCss3"]}
                    thumbnail="thumbnails/wordle_clone_thumbnail.JPG"
                    link="https://chriswordleclone.netlify.app/"
                    hovered={hoveredArray[6].hovered}
                    title="Wordle Clone"
                  />
                </div>
                <div
                  style={{
                    height: "20vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <ProjectTile
                    handleOnHover={handleOnHover}
                    handleOffHover={handleOffHover}
                    id={hoveredArray[7].id}
                    icons={[
                      "SiReact",
                      "SiHtml5",
                      "SiCss3",
                      "SiTypescript",
                      "SiMaterialui",
                    ]}
                    thumbnail="thumbnails/personal_website_thumbnail.JPG"
                    link="https://chrisgao.netlify.app/"
                    hovered={hoveredArray[7].hovered}
                    title="Personal Site"
                  />
                </div>
                <div
                  style={{
                    height: "20vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <ProjectTile
                    handleOnHover={handleOnHover}
                    handleOffHover={handleOffHover}
                    id={hoveredArray[8].id}
                    icons={[
                      "SiJavascript",
                      "SiReact",
                      "SiHtml5",
                      "SiCss3",
                      "SiMaterialui",
                      "SiNextdotjs",
                    ]}
                    thumbnail="thumbnails/personal_website_thumbnail.JPG"
                    link="https://climbgg.netlify.app/"
                    hovered={hoveredArray[8].hovered}
                    title="Accordion Form UI"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
