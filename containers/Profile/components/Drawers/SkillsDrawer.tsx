import React, { useState } from "react";
import BasicDrawer from "../../../../components/Drawer/BasicDrawer";
import { Button, Input, Slider } from "antd";
import { FiMinusCircle, FiPlus } from "react-icons/fi";

interface SkillsDrawerProps {
  open: boolean;
  onClose: () => void;
}

type Skill = {
  name: string;
  proficiency: number;
};

const proficiencyMarks: Record<number, string> = {
  0: "Beginner",
  1: "Intermediate",
  2: "Proficient",
  3: "Expert",
};

const SkillsDrawer: React.FC<SkillsDrawerProps> = ({ open, onClose }) => {
  const [skills, setSkills] = useState<Skill[]>([]);

  const marks = {
    1: proficiencyMarks[1],
    2: proficiencyMarks[2],
  };

  const handleAddSkill = () => {
    setSkills([{ name: "", proficiency: 0 }, ...skills]); // Adds the new skill at the beginning
  };

  const handleSkillChange = (
    index: number,
    key: keyof Skill,
    value: string | number
  ) => {
    const updatedSkills = skills.map((skill, i) =>
      i === index ? { ...skill, [key]: value } : skill
    );
    setSkills(updatedSkills);
  };

  const handleRemoveSkill = (index: number) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  const handleNameChange = (index: number, value: string) => {
    handleSkillChange(index, "name", value);
  };

  return (
    <BasicDrawer title="Skills" placement="right" open={open} onClose={onClose}>
      <Button
        onClick={handleAddSkill}
        style={{ width: "100%" }}
        icon={<FiPlus />}
      >
        Add Skill
      </Button>
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col gap-6 mt-4">
          <div className="flex gap-4 items-center justify-between">
            <Input
              placeholder="Enter Skill"
              value={skill.name}
              onChange={(e) => handleNameChange(index, e.target.value)}
              className="w-full"
            />
            <FiMinusCircle
              className="cursor-pointer text-red-600 size-6"
              onClick={() => handleRemoveSkill(index)}
            />
          </div>
          <div className="relative">
            <span className="absolute -top-3 start-0">Beginner</span>
            <Slider
              min={0}
              max={3}
              step={1}
              marks={marks}
              defaultValue={skill.proficiency}
              value={skill.proficiency}
              tooltip={{
                formatter: (value) => proficiencyMarks[value!],
              }}
              onChange={(value) =>
                handleSkillChange(index, "proficiency", value)
              }
            />
            <span className="absolute -top-3 end-0">Expert</span>
          </div>
        </div>
      ))}
    </BasicDrawer>
  );
};

export default SkillsDrawer;
