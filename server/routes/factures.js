const express = require('express');
const router = express.Router();
const { Facture } = require("../models/Facture");
const multer = require('multer');
const { auth } = require("../middleware/auth");


var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.jpg' || ext !== '.png') {
            return cb(res.status(400).end('only jpg, png are allowed'), false);
        }
        cb(null, true)
    }
})

var upload = multer({ storage: storage }).single("file")


//=================================
//             Facture
//=================================

router.post("/uploadImage", auth , (req, res) => {

    upload(req, res, err => {
        if (err) {
            return res.json({ success: false, err })
        }
        return res.json({ success: true, image: res.req.file.path, fileName: res.req.file.filename })
    })
});



router.post("/uploadFacture", auth, (req, res) => {

    //save all the data we got from the client into the DB 
    const facture = new Facture(req.body)

    facture.save((err) => {
        if (err) return res.status(400).json({ success: false, err })
        return res.status(200).json({ success: true })
    })
});


//?id=${factureId}&type=single
//id=12121212,121212,1212121   type=array 
router.get("/factures_by_id", (req, res) => {
    let type = req.query.type
    let factureIds = req.query.id

    console.log("req.query.id", req.query.id)

    if (type === "array") {
        let ids = req.query.id.split(',');
        factureIds = [];
        factureIds = ids.map(item => {
            return item
        })
    }

    console.log("factureIds", factureIds)


    //we need to find the facture information that belong to facture Id 
    Facture.find({ '_id': { $in: factureIds } })
        .populate('writer')
        .exec((err, facture) => {
            if (err) return res.status(400).send(err)
            return res.status(200).send(facture)
        })
});



module.exports = router;