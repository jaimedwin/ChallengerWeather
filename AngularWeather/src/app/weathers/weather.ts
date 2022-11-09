export interface Weather {
    "ID": number,
    "Precipitation": number,
    "Humidity": number,
    "Wind": number,
    "Date": string,
    "CityID": number,
    "Status": boolean,
    "UpdateAt": string,
    "CreateAt": string,
    "DeleteAt": string,
    "UserID": number,
    "City": {
        "ID": number,
        "Name": string,
        "StateID": number,
    },
    "User": {
        "ID": number,
        "Username": string,
        "Email": string,
        "Password": string,
    }
}

export interface WeatherUpdate {
    "ID": number,
    "Precipitation": number,
    "Humidity": number,
    "Wind": number,
    "Date": string,
    "CityID": number,
    "UserID": number,
    "Status": boolean,
    "UpdateAt": string,
    "CreateAt": string,
    "DeleteAt": string
}

export interface WeatherCreate {
    "Precipitation": number,
    "Humidity": number,
    "Wind": number,
    "Date": string,
    "CityID": number,
    "UserID": number
}