import React, { useContext, useEffect, useState } from 'react';
import Tilt from 'react-tilt';
import SkillImg from '../Image/SkillImg';

const CallSkill =  ({filename, skillname}) => { //Very important to put { } here
    return [
      <div className="skill-wrapper__image">
        <Tilt
                  options={{
                    reverse: false,
                    max: 4,
                    perspective: 1000,
                    scale: 1.08,
                    speed: 100,
                    transition: true,
                    axis: null,
                    reset: true,
                    easing: 'cubic-bezier(.03,.98,.52,.99)',
                  }}
                  >
          <div data-tilt className="thumbnail rounded">
            <SkillImg alt={'logo'} filename={filename} />
          </div>  
        </Tilt>
        <div className="skill-wrapper-title">
          <p></p>
          <p></p>
          <h1>{skillname}</h1>
        </div>
    </div>
    ];
  }

export default CallSkill;

