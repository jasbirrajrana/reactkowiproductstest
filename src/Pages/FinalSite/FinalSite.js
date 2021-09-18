import React from 'react';
import Consultation from '../../Components/Consultation/Consultation';
import Delivery from '../../Components/Delivery/Delivery';
import DietPlan from '../../Components/DietPlan/DietPlan';
import ExercisePlan from '../../Components/ExercisePlan/ExercisePlan';
import Predictions from '../../Components/Predictions/Predictions';
import Reminders from '../../Components/Reminders/Reminders';
import Signup from '../../Components/Signup/Signup';
import SectionTen from '../../Components/sectionTen/SectionTen';
import SectionThirteen from '../../Components/sectionThirteen/SectionThirteen';


const FinalSite = () => {
  return (
    <>
      <Signup />
      <DietPlan />
      <ExercisePlan />
      <SectionTen/>
      <Consultation />
      <Delivery />
      <SectionThirteen/>
      <Reminders />
      <Predictions />
    </>
  );
};

export default FinalSite;