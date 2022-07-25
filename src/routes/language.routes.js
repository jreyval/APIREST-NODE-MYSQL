import {Router} from "express"
import { methods as LanguageController } from "../contrellers/language.controller"

const router = Router()

router.get("/", LanguageController.getLanguages)
router.get("/:id", LanguageController.getLanguage)
router.delete("/:id", LanguageController.deleteLanguage)
router.put("/:id", LanguageController.updateLanguage)
router.post("/", LanguageController.addLanguage)

export default router;