const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('¡Hola desde Docker!'));

app.get('/suma', (req, res) => {
	const a = Number(req.query.a);
	const b = Number(req.query.b);

	if (!Number.isFinite(a) || !Number.isFinite(b)) {
		return res.status(400).json({
			ok: false,
			error: 'Parámetros inválidos. Usa /suma?a=2&b=3',
		});
	}

	return res.json({ ok: true, a, b, resultado: a + b });
});

app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));
