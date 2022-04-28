import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
	} = useForm({
		mode: "onBlur"
	});

	const onSubmit = (data) => {
		alert(JSON.stringify(data));
		reset();
	};
	
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label htmlFor="firstName">First Name</label>
			<input
				placeholder="Имя"
				{...register("firstName", {
					required: "Поле обязательно для заполнения",
					minLength: {
						value: 3,
						message: "Минимум 3 символа"
					},
					maxLength: {
						value: 20,
						message: "Максимум 20 символов"
					},
					// validate: (value) => value !== "bill"
				})}
			/>
			{errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}
			
			<label htmlFor="lastName">Last Name</label>
			<input
				placeholder="Фамилия"
				{...register("lastName", {
					required: "Поле обязательно для заполнения",
					minLength: {
						value: 3,
						message: "Минимум 3 символа"
					},
					maxLength: {
						value: 20,
						message: "Максимум 20 символов"
					},
					// validate: (value) => value.length > 3
				})}
			/>
			{errors?.lastName && <p>{errors?.lastName?.message || "Error!"}</p>}
			
			<label htmlFor="email">Электронная почта</label>
			<input
				placeholder="bluebill1049@hotmail.com"
				type="email"
				{...register("email", {
					required: "Поле обязательно для заполнения",
				})}
			/>
			{errors?.email && <p>{errors?.email?.message || "Error!"}</p>}

			<label htmlFor="password">Пароль</label>
			<input
				placeholder="Введите пароль"
				type="password"
				{...register("password", {
					required: "Поле обязательно для заполнения",
				})}
			/>
			{errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
			
			<input type="submit" disabled={!isValid} />
		</form>
	);
};

export default RegisterForm;














// import React, { useState, useEffect } from "react";
// import TextField from "../common/form/textField";
// import { validator } from "../../utils/validator";

// const RegisterForm = () => {
//     const [data, setData] = useState({ email: "", password: "" });

//     const [errors, setErrors] = useState({});

//     const handleChange = ({ target }) => {
//         setData((prevState) => ({
//             ...prevState,
//             [target.name]: target.value
//         }));
//     };

//     const validatorConfig = {
//         email: {
//             isRequired: {
//                 message: "Электронная почта обязательна для заполнения"
//             },
//             isEmail: {
//                 message: "Email введен некорректно"
//             }
//         },
//         password: {
//             isRequired: {
//                 message: "Пароль обязателен для заполнения"
//             },
//             isCapitalSymbol: {
//                 message: "Пароль должен содержать хотя бы одну заглавную букву"
//             },
//             isContainDigit: {
//                 message: "Пароль должен содержать хотя бы одно число"
//             },
//             min: {
//                 message: "Пароль должен состоять минимум из 8 символов",
//                 value: 8
//             }
//         }
//     };

//     useEffect(() => {
//         validate();
//     }, [data]);

//     const validate = () => {
//         const errors = validator(data, validatorConfig);
//         setErrors(errors);
//         return Object.keys(errors).length === 0;
//     };

//     const isValid = Object.keys(errors).length === 0;

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const isValid = validate();
//         if (!isValid) return;
//         console.log(data);
//     };
//     return (
//         <form onSubmit={handleSubmit}>
//             <TextField
//                 label="Электронная почта"
//                 name="email"
//                 value={data.email}
//                 onChange={handleChange}
//                 error={errors.email}
//             />
//             <TextField
//                 label="Пароль"
//                 type="password"
//                 name="password"
//                 value={data.password}
//                 onChange={handleChange}
//                 error={errors.password}
//             />
//             <button
//                 className="btn btn-primary w-100 mx-auto"
//                 type="submit"
//                 disabled={!isValid}
//             >
//                 Submit
//             </button>
//         </form>
//     );
// };

// export default RegisterForm;
