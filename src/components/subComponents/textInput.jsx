import React from "react";

function TextInput({ id, placeholder, register, type = "text", required = true }) {
	return (
		<>
			<input
				required={required}
				className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
				type={type}
				id={id}
				{...register(id, { required })}
				placeholder={placeholder}
			/>
		</>
	);
}

export default TextInput;
