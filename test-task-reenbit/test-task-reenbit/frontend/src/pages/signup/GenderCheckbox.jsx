const GenderCheckbox = () => {
  return (
  <div className="flex mt-3">

    <div className="flex items-start mt-3 mb-3 mr-3">
    <label htmlFor="gender" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
     <div className="flex items-center h-5 ml-3">
      <input id="gender" type="checkbox" value="Male" className="w-5 h-5 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
     </div>
    </div>

    <div className="flex items-start mt-3 mb-3">
    <label htmlFor="gender" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
     <div className="flex items-center h-5 ml-3">
      <input id="gender" type="checkbox" value="Female" className="w-5 h-5 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
     </div>
    </div>

  </div>
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
  )
}

export default GenderCheckbox
