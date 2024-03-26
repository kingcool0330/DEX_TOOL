import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const FaqItem = ({ faqItem, key }) => {
  const [extendFlag, setExtendFlag] = useState(false);

  const handleExtendFlag = () => {
    setExtendFlag(!extendFlag);
  };

  return (
    <div className="faq-item" key={key} onClick={handleExtendFlag}>
      <div className="question-section">
        <div className="no">{faqItem.id}</div>
        <div className="question">{faqItem.question}</div>
        <div className="drop-icon">
          {extendFlag ? (
            <FontAwesomeIcon style={{ fontSize: "18px" }} icon={faMinus} />
          ) : (
            <FontAwesomeIcon style={{ fontSize: "18px" }} icon={faPlus} />
          )}
        </div>
      </div>
      {extendFlag && (
        <div
          className="answer-section extend"
          dangerouslySetInnerHTML={{
            __html: faqItem.answer,
          }}
        ></div>
      )}
    </div>
  );
};

export default FaqItem;
