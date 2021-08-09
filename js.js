const baseUrl = 'https://maciag.ursse.org/api'

function registerUser({
	email,
	password,
	role,
}) {
	return new Promise((resolve, reject) => {
		const request = {
			url: baseUrl + '/users',
			type: 'POST',
			crossDomain: true,
			dataType: 'json',
			contentType: 'application/json',
			data: JSON.stringify({
				user: {
					email,
					role,
					password,
				},
			}),
			success: ({ result }) => {
				resolve(result)
			},
			error: reject,
		}
		$.ajax(request)
	})
}

function loginUser({
	email,
	password,
}) {
	return new Promise((resolve, reject) => {
		const request = {
			url: baseUrl + '/users/login',
			type: 'POST',
			dataType: 'json',
			contentType: 'application/json',
			data: JSON.stringify({
				user: {
					email,
					password,
				},
			}),
			success: ({ result }) => {
				resolve(result)
			},
			error: reject,
		}
		$.ajax(request)
	})
}

function getAllCourses({
	token,
}) {
	return new Promise((resolve, reject) => {
		const request = {
			url: baseUrl + '/courses/all',
			type: 'GET',
			dataType: 'json',
			contentType: 'application/json',
			headers: { 'Authorization': 'Bearer ' + token },
			success: ({ result }) => {
				resolve(result)
			},
			error: reject,
		}
		$.ajax(request)
	})
}

function createCourse({
	token,
	name,
	faculty,
	status,
}) {
	return new Promise((resolve, reject) => {
		const request = {
			url: baseUrl + '/courses',
			type: 'POST',
			dataType: 'json',
			contentType: 'application/json',
			headers: { 'Authorization': 'Bearer ' + token },
			data: JSON.stringify({
				course: {
					name,
					faculty,
					status,
				},
			}),
			success: ({ result }) => {
				resolve(result)
			},
			error: reject,
		}
		$.ajax(request)
	})
}

function getAllClasses({
	token,
}) {
	return new Promise((resolve, reject) => {
		const request = {
			url: baseUrl + '/classes/all',
			type: 'GET',
			dataType: 'json',
			contentType: 'application/json',
			headers: { 'Authorization': 'Bearer ' + token },
			success: ({ result }) => {
				resolve(result)
			},
			error: reject,
		}
		$.ajax(request)
	})
}

function createClass({
	token,
	name,
	faculty,
	term,
	year,
	status,
}) {
	return new Promise((resolve, reject) => {
		const request = {
			url: baseUrl + '/classes',
			type: 'POST',
			dataType: 'json',
			contentType: 'application/json',
			headers: { 'Authorization': 'Bearer ' + token },
			data: JSON.stringify({
				class: {
					name,
					faculty,
					term,
					year,
					status,
				},
			}),
			success: ({ result }) => {
				resolve(result)
			},
			error: reject,
		}
		$.ajax(request)
	})
}

function getIndicators({
	token,
}) {
	return new Promise((resolve, reject) => {
		const request = {
			url: baseUrl + '/forms/indicators',
			type: 'GET',
			dataType: 'json',
			contentType: 'application/json',
			headers: { 'Authorization': 'Bearer ' + token },
			success: ({ result }) => {
				resolve(result)
			},
			error: reject,
		}
		$.ajax(request)
	})
}

function getGraduateAttributes({
	token,
}) {
	return new Promise((resolve, reject) => {
		const request = {
			url: baseUrl + '/forms/grad_attributes',
			type: 'GET',
			dataType: 'json',
			contentType: 'application/json',
			headers: { 'Authorization': 'Bearer ' + token },
			success: ({ result }) => {
				resolve(result)
			},
			error: reject,
		}
		$.ajax(request)
	})
}

function getQuestions({
	token,
}) {
	return new Promise((resolve, reject) => {
		const request = {
			url: baseUrl + '/forms/questions',
			type: 'GET',
			dataType: 'json',
			contentType: 'application/json',
			headers: { 'Authorization': 'Bearer ' + token },
			success: ({ result }) => {
				resolve(result)
			},
			error: reject,
		}
		$.ajax(request)
	})
}
