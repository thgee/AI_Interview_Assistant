import styles from "./HomeLeftContainer.module.scss";
import { FC, useEffect, useRef, useState } from "react";
import { interviewModes } from "../../constants/constants";
import ModeBox from "./ModeBox";
import { HomeLeftContainerProps } from "../../types/types";
import { Transition } from "react-transition-group";

const HomeLeftContainer: FC<HomeLeftContainerProps> = ({
  selectedMode,
  setSelectedMode,
  rightContainerWidth,
  state,
}) => {
  const firstMountFlag = useRef(false); // 컴포넌트 마운트 시에 에니메이션 적용하지 않기 위한 변수

  useEffect(() => {
    firstMountFlag.current = true;
  }, []);

  const moveLeftAnimation = {
    transform:
      state === "exited"
        ? `translateX(${(rightContainerWidth as number) / 2}px)`
        : "none",
    opacity: firstMountFlag.current ? "100%" : "0%",

    transition: "all 500ms ease-in-out",
  };

  return (
    <div className={`${styles.HomeLeftContainer}`} style={moveLeftAnimation}>
      <section className={styles.title_section}>
        <h3>합격의 지름길</h3>
        <h2>위듀</h2>
        <p>
          With you, we do
          <br />
          면접에 합격하는 그날까지 위듀는 당신 곁에 있습니다
        </p>
      </section>

      <section className={styles.select_mode_section}>
        {interviewModes.map((it) => (
          <ModeBox
            key={it.key}
            id={it.key}
            title={it.title}
            description={it.description}
            selectedMode={selectedMode}
            setSelectedMode={setSelectedMode}
          />
        ))}
      </section>
    </div>
  );
};

export default HomeLeftContainer;
