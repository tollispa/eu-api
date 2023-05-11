import { useState } from 'react';
import "./CountrySearch.css"

const countriesData = [
	{
		country: "Austria",
		code: "AT",
		men: 4.22,
		women: 4.28,
	},
	{
		country: "Belgium",
		code: "BE",
		men: 5.74,
		women: 6.03,
	},
	{
		country: "Bulgaria",
		code: "BG",
		men: 3.61,
		women: 3.9,
	},
];

function CountrySearch() {
	const [inputValue, setInputValue] = useState("");
	const [countryData, setCountryData] = useState(null);

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		
		// kollr om input matchar någon ISO kod eller land namn i arrayen
		const matchingCountry = countriesData.find(
			(country) =>
				country.code === inputValue.toUpperCase() ||
				country.country.toLowerCase().includes(inputValue.toLowerCase())
		);
		if (matchingCountry) {
			setCountryData(matchingCountry);
		} else {
			setCountryData(null);
		}
		
		setInputValue("");
	};

	return (
		<div className="container">
			<h1>Enter ISO Code</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Search:
					<input
						type="text"
						value={inputValue}
						onChange={handleInputChange}
					/>
				</label>
				<button type="submit">Submit</button>
			</form>
			<div className="chart-container">
				{countryData ? (
					<div className="chart">
						<h2>
							Activation of registered unemployed in {countryData.country}
						</h2>
						<div className="bars">
							<div
								className="bar"
								style={{
									height: `${countryData.men * 50}px`,
									backgroundColor: "blue",
								}}
							>
								<span>{countryData.men}M</span>
							</div>
							<div
								className="bar"
								style={{
									height: `${countryData.women * 50}px`,
									backgroundColor: "pink",
								}}
							>
								<span>{countryData.women}M</span>
							</div>
						</div>
					</div>
				) : (
					<p className="not-found">Enter country name or ISO code.</p>
				)}
			</div>
		</div>
	);
}

export default CountrySearch;