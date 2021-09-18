import React from 'react';
import DietCard from './DietCard';
import DietContent from './DietContent';
import style from '../../Styles/DietPlan.module.css'
const DietPlan = () => {
  return (
    <section className={style.dietWrapper}>
      <DietContent />
      <DietCard />
    </section>
  );
};

export default DietPlan;