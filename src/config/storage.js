// Import the NFTStorage class and File constructor from the 'nft.storage' package
import { NFTStorage } from "nft.storage";
// import { filesFromPaths } from "files-from-path";
// import path from "path";

// The 'mime' npm package helps us set the correct file type on our File objects
// import mime from "mime";

// The 'fs' builtin module on Node.js provides access to the file system
// import fs from "fs";

// The 'path' module provides helpers for manipulating filesystem paths
// import path from "path";

// Paste your NFT.Storage API key into the quotes:
const NFT_STORAGE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDU3QTZCM0E4NUNmODkzOEM1RDNERjljMERjNEYyNGE1YzMxQ0QwMzciLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2OTY0MDAxMTM2NywibmFtZSI6IlRlc3RORlQifQ.4Wac1KlqOOlmxVZOHNDZspHjqHAm6oGd0YCedUJlcKs";
/**
 * Reads an image file from `imagePath` and stores an NFT with the given name and description.
//  * @param {string} imagePath the path to an image file
//  * @param {string} name a name for the NFT
//  * @param {string} description a text description for the NFT
 */
export async function storeNFT(name, description, image) {
  // console.log("name, desc, file", name, description, image);
  // load the file from disk
  //   const image = await fileFromPath(imagePath);
  // const image = blo
  // if (process.argv.length !== 3) {
  //   console.error(`usage: ${process.argv[0]} ${process.argv[1]} <directory-path>`)
  // }
  // const directoryPath = "tokenMetadata";
  // const files = filesFromPaths(directoryPath, {
  //   pathPrefix: path.resolve(directoryPath), // see the note about pathPrefix below
  //   hidden: true, // use the default of false if you want to ignore files that start with '.'
  // });
  // const files = await filesFromPaths(["path/to/", "path/to/dir"]);
  // create a new NFTStorage client using our API key
  const nftstorage = await new NFTStorage({ token: NFT_STORAGE_KEY });
  // console.log(nftstorage, "nftstorage", image[0]);
  // call client.store, passing in the image & metadata
  // const res = await nftstorage.store(
  //   {
  //     name,
  //     description,
  //     image: image[0],
  //   },
  //   {
  //     name,
  //     description,
  //     image: image[1],
  //   },
  //   {
  //     name,
  //     description,
  //     image: image[2],
  //   }
  // );
  // const sourceFile = new File('console.log("hello, world")', "src/index.js", {
  //   type: "text/javascript",
  // });

  // const readmeFile = new File(
  //   "Run node src/index.js for a friendly greeting.",
  //   "README.txt",
  //   { type: "text/plain" }
  // );

  // const cid = await nftstorage.storeDirectory([readmeFile, sourcefile]);
  // console.log("res: ", cid);
  // const status = await nftstorage.status(cid);
  // console.log(status);
  // let obj = {
  //   uri: `https://ipfs.io/ipfs/${res.ipnft}/metadata.json`,
  // };
  // let obj = {
  //   metadataUri: `https://ipfs.io/ipfs/${res.ipnft}/metadata.json`,
  //   path: `https://ipfs.io/ipfs/${res.data.image.pathname.substring(
  //     2,
  //     res.data.image.pathname.length
  //   )}`,
  // };
  // // console.log("ress ", res, "Path", obj?.path);
  // return obj?.path;
}

/**
 * A helper to read a file from a location on disk and return a File object.
 * Note that this reads the entire file into memory and should not be used for
 * very large files.
 * @param {string} filePath the path to a file to store
 * @returns {File} a File object containing the file content
 */
// async function fileFromPath(filePath) {
//   const content = await fs.promises.readFile(filePath);
//   const type = mime.getType(filePath);
//   return new File([content], path.basename(filePath), { type });
// }

/**
 * The main entry point for the script that checks the command line arguments and
 * calls storeNFT.
 *
 * To simplify the example, we don't do any fancy command line parsing. Just three
 * positional arguments for imagePath, name, and description
 */
// async function main() {
//   const args = process.argv.slice(2);
//   if (args.length !== 3) {
//     console.error(
//       `usage: ${process.argv[0]} ${process.argv[1]} <image-path> <name> <description>`
//     );
//     process.exit(1);
//   }

//   const [imagePath, name, description] = args;
//   const result = await storeNFT(imagePath, name, description);
//   console.log(result);
// }

// Don't forget to actually call the main function!
// We can't `await` things at the top level, so this adds
// a .catch() to grab any errors and print them to the console.
// main().catch((err) => {
//   console.error(err);
//   process.exit(1);
// });
