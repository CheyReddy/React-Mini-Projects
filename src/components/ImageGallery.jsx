import React, { useState } from "react";
import styles from "../css/ImageGallery.module.css";
import { Link } from "react-router-dom";

function ImageGallery() {
  const [srcUrl, setSrcUrl] = useState("");
  const handleClick = (e) => {
    setSrcUrl(e.target.src);
  };
  return (
    <div className={styles.container}>
      <Link className={styles.back} to={-1}>Back</Link>  
      <p className={styles.para}>Image Gallery</p>
      <p className={styles.para}>Click on an Image !</p>
      <div className={styles.gallery}>
        <div>
          <img
            alt="image 1"
            className={styles.cat}
            onClick={handleClick}
            src="https://imgs.search.brave.com/bAdI7a7qnuuOIJphttt3DfbzLnCU7ZDMtnkejXq6UII/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMDkz/OC81NDk5L2kvNDUw/L2RlcG9zaXRwaG90/b3NfNTQ5OTg2MTMt/c3RvY2stcGhvdG8t/Z2luZ2VyLWNhdC5q/cGc"
          />
        </div>
        <div>
          <img
            alt="image 2"
            className={styles.cat}
            onClick={handleClick}
            src="https://imgs.search.brave.com/YzG9FgYN5qLWsiYyJ4dUEvxav9e98dBH0loR8YPRA1E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc0/ODc3NTY1L3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtYnJvd24tY2F0/LWFnYWluc3QtYS1n/cmF5LWJhY2tncm91/bmQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWlGcFFNSzlF/aTIzVm9XcExLa2Zh/TFVtdXN5Y3VaWllV/OWtWMjNzT2F6YzQ9"
          />
        </div>
        <div>
          <img
            alt="image 3"
            className={styles.cat}
            onClick={handleClick}
            src="https://imgs.search.brave.com/lZtf1S7JKFcaZs2lhxTpAtaJzTk_V35Xt8ys4htuVBU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Y2F0LXBvc2VzLXBl/cmZlY3RseS5qcGc_/d2lkdGg9MTAwMCZm/b3JtYXQ9cGpwZyZl/eGlmPTAmaXB0Yz0w"
          />
        </div>
        <div>
          <img
            alt="image 4"
            className={styles.cat}
            onClick={handleClick}
            src="https://imgs.search.brave.com/t6Nv0DwxoIACRxxtX2h7yt31ux5SCXHWgHVpoGh1diw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzM2Lzk5LzIy/LzM2MF9GXzIzNjk5/MjI4M19zTk94Q1ZR/ZUZMZDVwZHFhS0do/OERSR01aeTdQNFhL/bS5qcGc"
          />
        </div>
      </div>
      {srcUrl && (
        <div className={styles.selectedImage}>
          <p className={styles.para}>Selected Image</p>
          <div>
            <img
              src={srcUrl}
              alt="selected image"
              width="500px"
              height="500px"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
