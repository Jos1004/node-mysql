var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res){
  try{
    const results = await global.db.selectClientes()
    console.log(results);
    res.render('index',{results})
  }
  catch(error){
    res.redirect('/?error=' + error)
  }
})

router.get('/new', function(req, res, next) {
  res.render('new', { title: "Cadastro do Cliente", action: "/new"});
})

router.post('/new', async function (req, res){
  const nome = req.body.nome
  const idade = !req.body.idade ? null : parseInt(req.body.idade)
  const uf = req.body.uf
  try{
    await global.db.insertCliente({nome, idade, uf})
    res.redirect('/?new=true')
  }
  catch(error){
    res.redirect('/?error=' + error)
  }
})

router.get('/edit/:id', async function(req, res){
  const id = parseInt(req.params.id)
  try {
    const result = await global.db.selectCliente(id)
    res.render('edit',{title: 'Editar Cadastro', result, action: "/edit/" + id});
  }
  catch(error){
    res.redirect('/?error=' + error)
  }
})

router.get('/edit', function (req, res, next){
  res.render('edit', {title: 'Editar Cadastro', result: {}, action: "/edit"});
})

router.post('/edit/:id', async function (req, res){
  const id = req.params.id
  const nome = req.body.nome
  const idade = !req.body.idade ? null : parseInt(req.body.idade)
  const uf = req.body.uf

  try{
    await global.db.updateCliente(id,{nome, idade, uf})
    res.redirect('/?edit=true')
  }
  catch (error){
    res.redirect('/?error=' + error)
  }
})

router.get('/delete/:id', async function(req, res){
  const id = parseInt(req.params.id)

  try{
    await global.db.deleteCliente(id)
    res.redirect('/?delete=true')
  }
  catch(error){
    res.redirect('/?error=' + error)
  }
})

module.exports = router;
