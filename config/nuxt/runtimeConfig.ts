export const runtimeConfig = {
	public: {
		apiUrl: process.env.PUBLIC_API_URL,
		appUrl: process.env.PUBLIC_APP_URL,
		isDev: process.env.NODE_ENV === 'development'
	}
};
