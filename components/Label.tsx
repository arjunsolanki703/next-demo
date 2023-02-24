export const Label = ({title}: any) => {
  return (
    <div className="w-full flex flex-col mb-4">
      <div>
        <div className="mb-3 relative">
          <p className="font-bold text-[#C02328] text-[15px] relative z-[1] bg-[#fff] inline pr-2.5">
            {title}
          </p>
          <hr className="absolute h-1 w-full top-[14px]" />
        </div>
      </div>
    </div>
  );
};
