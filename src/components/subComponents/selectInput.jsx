import React from "react";

function SelectInput({ id, placeholder, options, register, required = true }) {
	return (
		<select
			className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
			required={required}
			id={id}
			{...register(id, { required })}
		>
			<option value="" disabled selected>
				{placeholder}
			</option>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
}

export default SelectInput;
