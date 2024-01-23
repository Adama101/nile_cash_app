import React from "react";

import { Button, Img } from "components";

const RequestLoanCheckboxesdark = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="p-[11px] relative rounded-[50%] w-10">
          <div className="bg-blue_gray-50 h-[18px] m-auto rounded-sm w-[18px]"></div>
          <Button
            className="absolute flex h-6 inset-[0] items-center justify-center m-auto w-6"
            shape="square"
            color="black_900"
            size="xs"
            variant="outline"
          >
            <Img src="images/img_checkmark.svg" alt="checkmark" />
          </Button>
        </div>
      </div>
    </>
  );
};

RequestLoanCheckboxesdark.defaultProps = {};

export default RequestLoanCheckboxesdark;
