import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import CryptoLogo from "../../assets/images/cryptoLogo.png";

function Navbar() {
  return (
    <div>
      <div>
        <div>
          <Avatar src={CryptoLogo} size={"large"} />

          <Typography.Title level={2}>
            <Link to="/">Crytoverse</Link>
          </Typography.Title>
          {/* <button>

          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
