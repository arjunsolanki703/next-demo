import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { country } from "../../data/country";
import { Select } from "../Select";

interface input {
  labelName: string;
  placeHolder: string;
  style?: string;
  inputType?: string;
  value?: any;
  icon?: Boolean;
  imageName?: string;
  name?: string;
  onchange?: any;
}

interface textwithline {
  text: string;
  imageName?: StaticImageData;
}

interface textwithimage {
  text: string;
  src?: string;
  value?: any;
  imgName?: string;
}

export const CommonInput = ({
  placeHolder,
  labelName,
  style,
  inputType,
  value,
  onchange,
  name,
}: input) => {
  return (
    <div className="2xl:w-2/5 xl:w-2/5 max-md:w-full max-sm:w-full md:w-full sm:w-full mb-3">
      <label htmlFor="Name" className="mb-2.5 block">
        {labelName}
      </label>
      <input
        className="rounded-[25px] bg-[#F5F5F5] text-[15px] w-full px-[27px] py-3"
        placeholder={placeHolder}
        type={inputType}
        name={name}
        id=""
        value={value}
        onChange={(e) => {
          onchange(e);
        }}
      />
    </div>
  );
};

export const TextArea = ({
  placeHolder,
  labelName,
  value,
  name,
  onchange,
}: input) => {
  return (
    <div className="2xl:w-2/5 xl:w-2/5 max-md:w-full max-sm:w-full md:w-full sm:w-full mb-3">
      <label htmlFor="Name" className="mb-2.5 block">
        {labelName}
      </label>
      <textarea
        className="rounded-[25px] bg-[#F5F5F5] text-[15px] h-[100px] w-full px-[27px] py-3"
        placeholder={placeHolder}
        value={value}
        name={name}
        onChange={(e) => onchange(e)}
      ></textarea>
    </div>
  );
};

export const PhoneInput = ({
  placeHolder,
  labelName,
  value,
  icon,
  imageName,
  name,
  onchange,
}: input) => {
  const temp = country.find((ext) => ext.name);

  const [currentExtension, setCurrentExtension] = useState(temp);
  return (
    <div className="w-full relative mb-3">
      <label htmlFor="Name" className="mb-2.5 block">
        {labelName}
      </label>
      <Select
        //className="flex-1"
        options={country}
        selectedOption={currentExtension}
        handelChange={(event: any) => {
          console.log("parent", event);
          setCurrentExtension(event);
        }}
      />
      <input
        type="number"
        value={value}
        name={name}
        onChange={(e) => onchange(e)}
        className="rounded-[25px] bg-[#F5F5F5] text-[15px] w-full pl-[125px] px-[27px] py-3"
      />
      {icon && (
        <Image
          src={imageName}
          alt="picture"
          className="absolute right-[27px] top-[45px]"
        />
      )}
    </div>
  );
};

export const CommonTextWithLine = ({ text }: textwithline) => {
  return (
    <div className="pb-[10px] relative w-full">
      <p className="text-[#C02328] text-[15px] relative z-[1] bg-white pr-3 inline font-bold">
        {text}
      </p>
      <hr className="h-1 z-0 mt-[-10px]" />
    </div>
  );
};

export const CommonTextWithToggle = ({ text }: textwithline) => {
  return (
    <div className="flex my-3">
      <label
        className="pl-[0.15rem] hover:cursor-pointer mr-4"
        htmlFor="flexSwitchCheckDefault"
      >
        {text}
      </label>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#77E6B6] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#e4faf0]"></div>
      </label>
    </div>
  );
};

export const TextwithImageUpload = ({ text, src, imgName }: textwithimage) => {
  const [file, setFile] = useState();
  const imageName = (src: string) => {
    return src?.split("/").pop();
  };
  const handleChange = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="2xl:w-2/5 xl:w-2/5 md:w-full sm:w-full flex flex-col mb-4">
      <div className="mb-3 relative">
        <p className="font-bold text-[#C02328] text-[15px] relative z-[1] bg-[#fff] inline pr-2.5">
          {text}
        </p>
        <hr className="absolute h-1 w-full top-[14px]" />
      </div>

      <div className="mb-4">
        <label className="flex justify-center w-full h-64 px-4 transition bg-[#fcf4f4] border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
          <span className="flex items-center space-x-2 flex-col justify-center">
            <div>
              <svg
                width="100px"
                height="100px"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0" fill="none" width="20" height="20" />

                <g>
                  <path
                    fill="#f6dfdf"
                    d="M14.8 9c.1-.3.2-.6.2-1 0-2.2-1.8-4-4-4-1.5 0-2.9.9-3.5 2.2-.3-.1-.7-.2-1-.2C5.1 6 4 7.1 4 8.5c0 .2 0 .4.1.5-1.8.3-3.1 1.7-3.1 3.5C1 14.4 2.6 16 4.5 16H8v-3H5l4.5-4.5L14 13h-3v3h3.5c1.9 0 3.5-1.6 3.5-3.5 0-1.8-1.4-3.3-3.2-3.5z"
                  />
                </g>
              </svg>
            </div>
            <div>
              <span className="text-gray-600 font-bold text-xl mt-4">
                Drop files to Attach
              </span>
            </div>
            <div>
              <span className="font-medium text-gray-600">or</span>
            </div>
            <div className="mt-4">
              <button className="relative bg-[#c02328] p-4 rounded-lg font-bold text-white">
                <input
                  onChange={handleChange}
                  className="absolute w-3/4 opacity-0 cursor-pointer"
                  type="file"
                  name="logo"
                />
                Browse files
              </button>
            </div>
          </span>
          <input type="file" name="file_upload" className="hidden" />
        </label>
      </div>
      <div className="flex justify-between items-center relative">
        <div className="bg-[#fcf4f4] p-4 flex items-center w-[70%] h-[100px]">
          <div className="w-16 h-16 mr-3">
            <img src={file} className="w-full h-full object-cover" />
          </div>
          <div className="w-3/4" style={{ color: "gray" }}>
            <p className=" font-bold">{imageName(src)}</p>
            <p>195.5 KB</p>
          </div>
        </div>
        <div className="flex absolute right-0 justify-between items-center text-[80px] text-[#ABA5A2]">
          <span className="mr-3 text-4xl">70%</span>
          <svg
            className="cursor-pointer"
            height="20px"
            width="20px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 506.4 506.4"
          >
            <circle fill="#DF5C4E" cx="253.2" cy="253.2" r="249.2" />
            <path
              fill="#F4EFEF"
              d="M281.6,253.2l90.8-90.8c4.4-4.4,4.4-12,0-16.4l-11.2-11.2c-4.4-4.4-12-4.4-16.4,0L254,225.6
	l-90.8-90.8c-4.4-4.4-12-4.4-16.4,0L135.6,146c-4.4,4.4-4.4,12,0,16.4l90.8,90.8L135.6,344c-4.4,4.4-4.4,12,0,16.4l11.2,11.6
	c4.4,4.4,12,4.4,16.4,0l90.8-90.8l90.8,90.8c4.4,4.4,12,4.4,16.4,0l11.2-11.6c4.4-4.4,4.4-12,0-16.4L281.6,253.2z"
            />
            <path
              d="M253.2,506.4C113.6,506.4,0,392.8,0,253.2S113.6,0,253.2,0s253.2,113.6,253.2,253.2S392.8,506.4,253.2,506.4z M253.2,8
	C118,8,8,118,8,253.2s110,245.2,245.2,245.2s245.2-110,245.2-245.2S388.4,8,253.2,8z"
            />
            <path
              d="M352.8,379.6c-4,0-8-1.6-11.2-4.4l-88-88l-88,88c-2.8,2.8-6.8,4.4-11.2,4.4c-4,0-8-1.6-11.2-4.4L132,364
	c-2.8-2.8-4.4-6.8-4.4-11.2c0-4,1.6-8,4.4-11.2l88-88l-88-88c-2.8-2.8-4.4-6.8-4.4-11.2c0-4,1.6-8,4.4-11.2l11.2-11.2
	c6-6,16.4-6,22,0l88,88l88-88c2.8-2.8,6.8-4.4,11.2-4.4l0,0c4,0,8,1.6,11.2,4.4l11.2,11.2c6,6,6,16,0,22l-88,88l88,88
	c2.8,2.8,4.4,6.8,4.4,11.2c0,4-1.6,8-4.4,11.2l-11.2,11.2C360.8,378,357.2,379.6,352.8,379.6L352.8,379.6z M253.6,277.2
	c1.2,0,2,0.4,2.8,1.2l90.8,90.8c1.6,1.6,3.2,2.4,5.6,2.4l0,0c2,0,4-0.8,5.6-2.4l11.6-11.6c1.6-1.6,2.4-3.2,2.4-5.6
	c0-2-0.8-4-2.4-5.6l-90.8-90.8c-0.8-0.8-1.2-1.6-1.2-2.8s0.4-2,1.2-2.8l90.8-90.8c2.8-2.8,2.8-8,0-10.8l-11.2-11.2
	c-1.6-1.6-3.2-2.4-5.6-2.4l0,0c-2,0-4,0.8-5.6,2.4L256.8,228c-1.6,1.6-4,1.6-5.6,0l-90.8-90.8c-2.8-2.8-8-2.8-10.8,0L138,148.4
	c-1.6,1.6-2.4,3.2-2.4,5.6s0.8,4,2.4,5.6l90.8,90.8c1.6,1.6,1.6,4,0,5.6L138,346.8c-1.6,1.6-2.4,3.2-2.4,5.6c0,2,0.8,4,2.4,5.6
	l11.6,11.6c2.8,2.8,8,2.8,10.8,0l90.8-90.8C251.6,277.6,252.4,277.2,253.6,277.2z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export const TextWithSocialIcons = ({
  text,
  value,
  imageName,
}: textwithimage) => {
  return (
    <div className="2xl:w-2/5 xl:w-2/5 max-md:w-full max-sm:w-full md:w-full sm:w-full relative">
      <label htmlFor="Name">{text}</label>

      <input
        className="w-full relative inline bg-[#F5F5F5] rounded-[30px] text-[15px] px-[27px] py-3 mt-2.5"
        placeholder="https://"
        type="text"
        name=""
        id=""
        value={value}
      />
      <Image
        src={imageName}
        alt="picture"
        className="absolute right-[27px] top-[45px]"
      />
    </div>
  );
};
