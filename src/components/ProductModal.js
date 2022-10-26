import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import data from "../../data";
import "./../styles/ProductModal.css";

export default function ProductModal({ open, handleClose, id }) {
  return (
    <div id="product-modal">
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={true}
        maxWidth="lg"
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        {data.map((value, index) => {
          if (index === id) {
            const size = value.productSize.split(",");

            return (
              <div key={index}>
                <DialogTitle
                  key={index}
                  id="customized-dialog-title"
                  className="brand-name"
                  onClose={handleClose}
                >
                  {value.name}
                </DialogTitle>

                <DialogContent className="dialog-content" dividers>
                  <div className="product-modal-images">
                    {value.otherImages.map((item, index) => {
                      return (
                        <img
                          src={item}
                          alt="image"
                          key={index}
                          className="modal-img"
                        />
                      );
                    })}
                  </div>
                  <div className="product-details">
                    <div className="description">{value.description}</div>
                    <span className="final-price">Rs.{value.finalPrice}</span>
                    <s className="old-price">Rs:{value.strickPrice}</s>
                    <div className="discount">{value.discount}% OFF</div>

                    <div className="size-option">
                      <div>Size Chart</div>

                      {size.map((item, index) => {
                        return (
                          <span className="size-box" key={index}>
                            {item}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </DialogContent>
              </div>
            );
          }
        })}

        <DialogActions id="actions">
          <Button
            variant="outlined"
            startIcon={<AddShoppingCartIcon />}
            onClick={handleClose}
          >
            Add To Cart
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
