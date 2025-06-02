const getCookieValue = (name) => {
	return document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || '';
}

