import React, { FunctionComponent } from "react";

interface IFormLabel {
  title: string;
  info?: string;
  required?: boolean;
}

const FormLabel: FunctionComponent<IFormLabel> = ({
  title,
  info,
  required = false,
}) => (
  <div className="flex flex-col gap-2">
    <div className="font-semibold text-base text-neutral-900">
      {title}
      {required && <span className="text-red-800">*</span>}
    </div>
    {info && <div className="text-xs text-neutral-600">{info}</div>}
  </div>
);

export default FormLabel;
