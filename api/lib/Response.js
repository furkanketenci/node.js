
const successResponse = (data, code = 200) => ({
    code,
    data,
});

const errorResponse = (error) => ({
    error: {
        message: error.message,
        description: error.description
    },
});

export { successResponse, errorResponse };