export default {
    STRIPE_KEY: "pk_test_Z7sFToMevKUAgECqmWZ3YESh",
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-east-2",
        BUCKET: "notes-bucket-react"
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://eyaj45gapf.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_XPWVMPLTd",
        APP_CLIENT_ID: "5li52rggpjupk0vm2o9mvlhj38",
        IDENTITY_POOL_ID: "us-east-2:4f4ebb13-bdfd-489f-b458-820d6824279e"
    }
};