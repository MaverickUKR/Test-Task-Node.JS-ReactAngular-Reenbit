const GenderCheckbox = ({onCheckboxChange, selectedGender}) => {
  return (
    <div className="flex mt-3">
      <div className="flex items-start mt-3 mb-3 mr-3">
        <label
          htmlFor="male"
          className={`text-gray-50 ms-2 text-s font-medium ${selectedGender === "male" ? "selected" : ""}`}
        >
          Male
        </label>
        <div className="flex items-start h-5 ml-3">
          <input
            id="male"
            type="checkbox"
            value="Male"
            className="w-6 h-6 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </div>
      </div>

      <div className="flex items-start mt-3 mb-3">
        <label
          htmlFor="female"
          className={`text-gray-50 ms-2 text-s font-medium ${selectedGender === "female" ? "selected" : ""}`}
        >
          Female
        </label>
        <div className="flex items-start h-5 ml-3">
          <input
            id="female"
            type="checkbox"
            value="Female"
            className="w-6 h-6 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </div>
      </div>
    </div>
  );
};

export default GenderCheckbox;

    // <div className="flex  mt-3">
    //    <div className="form-control mt-3">
    //     <label className={`label gap-2 cursor-pointer`}>
    //         <span className="label-text">Male</span>
    //         <input type='checkbox' className="checkbox border-slate-900" />
    //     </label>
    //     </div>
    //    <div className="form-control mt-3">
    //    <label className={`label gap-2 cursor-pointer`}>
    //         <span className="label-text">Female</span>
    //         <input type='checkbox' className="checkbox border-slate-900" />
    //     </label>
    //    </div>
    // </div>