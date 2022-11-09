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
    "City": City,
    "User": ViewUser
}

interface City {
    "ID": number,
    "Name": string
}

interface ViewUser {
    "Username": string
}