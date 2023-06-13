import React, { useEffect, useState } from "react";
import { storeNFT } from "./config/storage";
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import FileBase64 from "react-file-base64";

Moralis.start({
  apiKey: "Ayi9BO2JmXKMepqQBBS4rSQUFvHNc2A82sYE1Bd0S1tjVLoBbIbXmpBYSxncEkiw",
});

const Form = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState([]);
  const [loading, setloading] = useState(false);
  console.log(name, desc, file);

  const handleFiles = async (fileValue) => {
    console.log("fileValue", fileValue);
    setFile(fileValue);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    let image = "";
    // let stringUri = await storeNFT(name, desc, file);
    // const abi = await [
    //   {
    //     path: "001.jpg",
    //     content: file[0]?.base64,
    //   },
    //   {
    //     path: "002.jpg",
    //     content: file[1]?.base64,
    //   },
    //   {
    //     path: "003.jpg",
    //     content: file[2]?.base64,
    //   },
    // ];
    let abiImage = [];
    await file.map((file, key) =>
      abiImage.push({ path: `00${key + 1}.jpg`, content: file?.base64 })
    );
    // console.log("ABI", abiImage);
    const response = await Moralis.EvmApi.ipfs.uploadFolder({ abi: abiImage });
    image = await response.toJSON();
    // console.log(image);
    if (image) {
      let abi = [];
      await file.map((file, key) =>
        abi.push({
          path: `${key + 1}`,
          content: {
            name: file.name,
            description: `metadata discription ${key + 1}`,
            image: image[key].path,
          },
        })
      );
      console.log("ABI", abi);
      // const abiImage = await [
      //   {
      //     path: "1",
      //     content: {
      //       name: "test1",
      //       description: "testing metadata 1",
      //       image: image[0].path,
      //     },
      //   },
      //   {
      //     path: "2",
      //     content: {
      //       name: "test2",
      //       description: "testing metadata 2",
      //       image: image[1].path,
      //     },
      //   },
      //   {
      //     path: "3",
      //     content: {
      //       name: "test3",
      //       description: "testing metadata 3",
      //       image: image[2].path,
      //     },
      //   },
      //   {
      //     path: "4",
      //     content: {
      //       name: "test4",
      //       description: "testing metadata 4",
      //       image: image[3].path,
      //     },
      //   },
      // ];

      const response2 = await Moralis.EvmApi.ipfs.uploadFolder({ abi });

      console.log("Result", response2.toJSON());
      // console.log("stringUri", stringUri);
      setloading(false);
    }
  };
  const addNewMetadata = async () => {
    let abi = await [
      {
        path: "9",
        content: {
          name: "test9",
          description: "testing metadata 9",
          image: "jskjsdsadskajdsakjdsadjashd asdasjkdhsadsjad dasd",
        },
      },
    ];
    const response = await Moralis.EvmApi.ipfs.uploadNFT({ abi });
    console.log("response", response);
  };
  return (
    <>
      <div className="container my-5">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div style={{ flex: "row" }}>
            <label style={{ textAlign: "right" }}>Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div style={{ flex: "row" }}>
            <label style={{ textAlign: "right" }}>Description</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            />
          </div>
          <div style={{ flex: "row", margin: "20px 0" }}>
            <label
              htmlFor="exampleInputEmail1"
              className="form-label"
              style={{ margin: "0 15px 0 0" }}
            >
              Import Files
            </label>
            {
              <FileBase64
                multiple={true}
                onDone={(file) => handleFiles(file)}
              />
            }
            {/* <input
              type="file"
              className="form-control"
              onChange={(e) => handleFiles(e.target.files)}
              multiple
            /> */}
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={addNewMetadata}
        >
          addNewMetadata
        </button>
      </div>
    </>
  );
};

export default Form;
