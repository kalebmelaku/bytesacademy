import React from "react";

function NewsLetter() {
	return (
		<div className="flex h-full justify-center items-center">
			<div className="p-6">
				<div className="flex flex-wrap items-center w-full max-w-5xl p-5 mx-auto text-left border border-gray-200 rounded lg:flex-nowrap md:p-8">
					<div className="flex-1 w-full mb-5 md:mb-0 md:pr-5 lg:pr-10 md:w-1/2">
						<h3 className="mb-2 text-2xl font-bold text-gray-700">
							Subscribe to Our Newsletter
						</h3>
						<p className="text-gray-500">
							Provide your email to get email notification when we launch new
							products and new courses.
						</p>
					</div>
					<div className="w-full px-1 flex-0 md:w-auto lg:w-1/2">
						<form>
							<input type="hidden" name="tags" value="earlyaccess" />
							<div className="flex flex-col sm:flex-row">
								<input
									type="email"
									id="email"
									name="email"
									placeholder="Enter your email address"
									className="flex-1 px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md sm:mr-5 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 "
								/>
								<button
									type="submit"
									className="w-full px-6 py-4 mt-5 text-black text-lg bg-secondary rounded-md sm:mt-0 sm:w-auto whitespace-nowrap hover:bg-primary transition-colors duration-200"
								>
									Subscribe
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NewsLetter;
