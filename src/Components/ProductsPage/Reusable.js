import React from 'react';
import style from '../../Styles/Reusable.module.css';
const Reusable = (props) => {
  const { title, image, post, post1, post2, post3 } = props.contents;
  console.log(props)
  return (
    <>
      <div className="row">
        <div className="col-md-7">
          <div className={style.imgBox}>
            <img src={image} alt="sectionImage" />
          </div>
        </div>
        <div className="col-md-5">
          <div className={style.contentBox}>
            <h3 className={style.waitTitle}>{title}</h3>
            {
              props.contents.ifTrue && <>
                <p className={style.waitPost}>{post}</p>
                <p className={style.post1}>{post1}</p>
                <p className={style.post2}>{post2}</p>
                <p className={style.post3}>{post3}</p>
              </>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Reusable;