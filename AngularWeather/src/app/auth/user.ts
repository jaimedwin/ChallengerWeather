export interface UserLogin {
    "Username": string,
	"Password": string
}

export interface UserRegister {
    "Username": string,
    "Email": string,
	"Password": string
}

export interface UserResponse {
    "ID": number,
    "Username": string,
    "Token": string
}