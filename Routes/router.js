const express = require('express')
const router = new express.Router()
const userController = require('../Controllers/userController')
const projectController = require('../Controllers/projectController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const multerConfig = require('../middlewares/multerMiddleware')
//register


router.post('/user/register', userController.register)


//login
router.post('/user/login', userController.login)

//add project
router.post('/project/add', jwtMiddleware, multerConfig.single('projectThumb'), projectController.addProjects)

//get userprojects

router.get('/user/allprojects', jwtMiddleware, projectController.allUserProjects)

// get all project

router.get('/project/all', jwtMiddleware, projectController.allProjects)

//home projects

router.get('/project/home', projectController.getHomeProjects)

// edit project
router.put('/project/edit/:id', jwtMiddleware, multerConfig.single('projectThumb'), projectController.editProjectController)

//delete project

router.delete('/project/remove/:id',jwtMiddleware,projectController.deleteProjectController)

// update user
router.put('/user/edit',jwtMiddleware,multerConfig.single(`profileImage`),userController.editUser)

// export router
module.exports = router