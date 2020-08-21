const qiniu = require('qiniu')

// 自己可以到"www.qiniu.com" 申请自己的七牛空间
// 这个账号是我的，不是开放的哦
const ACCESS_KEY = "P7tDi7y1gVou21Uq5p7F9KcSEE7bCQhGe9K-zRKv";
const SECRET_KEY = "3S-vJXZeUM5lI_SNJfbW__lmtqLDihNPCs85Z3kV";

export default async function getUploadToken() {
  return new Promise((resolve, reject) => {
    let mac = new qiniu.auth.digest.Mac(ACCESS_KEY, SECRET_KEY);
    let options = {
      scope: "lvlbolg",
      expires: 7200
    };
    let putPolicy = new qiniu.rs.PutPolicy(options);
    let uploadToken = putPolicy.uploadToken(mac);

    if (uploadToken) {
      resolve({
        token: uploadToken
      })
    } else {
      reject()
    }
  })
}

