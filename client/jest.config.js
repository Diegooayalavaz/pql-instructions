module.exports = {
    transformIgnorePatterns: [
        "/node_modules/(?!axios)", // Transform axios since it uses ES modules
    ],
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock CSS imports
        "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js", // Mock image imports
    },
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"], // Optional: For setup configurations
};
