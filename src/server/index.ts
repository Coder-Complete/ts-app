import { GetObjectCommand, GetObjectCommandInput } from "@aws-sdk/client-s3";
import express, { Request, Response } from "express";

import cors from "cors";
import dotenv from "dotenv";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3Client } from "./s3Client.js";

dotenv.config();

// Create S3 service object

// const getFileFromS3 = async (req: Request, res: Response) => {
//   const key = req.query.filename;
//   const client = new S3Client({ region: process.env.AWS_REGION });
//   const params = {
//     Bucket: process.env.AWS_BUCKET,
//     Key: key,
//   } as GetObjectCommandInput;

//   const command = new GetObjectCommand(params);

//   try {
//     const data = await client.send(command);
//     data.Body.pipe(res);
//   } catch (error) {
//     console.log(error);
//   }
// };

async function getObjectUrl(bucket: String, objectKey: String) {
  try {
    const params = {
      Bucket: bucket,
      Key: objectKey,
    } as GetObjectCommandInput;
    const command = new GetObjectCommand(params);

    // Create the presigned URL.
    const signedUrl = await getSignedUrl(s3Client, command, {
      expiresIn: 3600,
    });

    return signedUrl;

    // const response = await s3Client.send(command);
    // console.log("transforming to string");
    // const str = await response.Body.transformToString();
    // return str;
  } catch (e) {
    console.log(new Error(`Could not retrieve file from S3: ${e.message}`));
  }
}

// async function main() {
//   let signedUrl = await getObjectUrl("codercomplete", "1-setup-zoom.mp4");
//   // console.log("myObject", myObject);
// }

// main();

// console.log("buckets.length", buckets.length);
// let bucket = buckets[0];

// let bucketParams = {
//   Bucket: bucket.Name,
// };

// console.log(bucketParams);

// AWS.config.get.Nameals(function (err) {
//   if (err) console.log(err.stack);
//   // credentials not loaded
//   else {
//     console.log("Access key:", AWS.config.credentials.accessKeyId);
// });

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/video", async (req: Request, res: Response) => {
  console.log("received video request");
  let signedUrl = await getObjectUrl("codercomplete", "1-setup-zoom.mp4");
  res.send(JSON.stringify(signedUrl));
});

app.get("/api", (req: Request, res: Response) => {
  res.json({ message: "Hello from server!" });
});

app.post("/uploadFile", (req: Request, res: Response) => {
  // res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
