# GDMAF Site — Pendências

## Status atual
Site no ar em: `https://gdmaf.github.io/-gdmaf.github.io/`  
Repositório: `github.com/gdmaf/-gdmaf.github.io`

---

## Prioridade alta

### 1. Renomear o repositório
- Settings → Repository name → `gdmaf.github.io` (remove o hífen)
- URL fica limpa: `https://gdmaf.github.io`
- Reativar Pages depois: Settings → Pages → branch `main` / `/ (root)` → Save

### 2. Fotos dos equipamentos
- Salvar fotos reais do laboratório em `images/`
- Substituir os 4 `src` do picsum.photos na seção **Serviços** pelos caminhos locais
- Remover o aviso em itálico "Fotos dos equipamentos serão adicionadas em breve."
- Sugestão de nomes: `mev.jpg`, `eds.jpg`, `dilatometro.jpg`, `seebeck.jpg`

### 3. Foto do grupo (hero)
- Adicionar foto em `images/foto-grupo.jpg`
- Substituir o `src` do picsum.photos no hero pelo caminho local
- Remover o aviso "Foto do grupo será adicionada em breve."

---

## Prioridade média

### 4. Links das redes sociais
- Instagram já está: `instagram.com/gdmaf_unifei` ✓
- LinkedIn: substituir `href="https://www.linkedin.com"` pelo perfil real
- Facebook: substituir `href="https://www.facebook.com"` pelo perfil real

### 5. GDCount — seção do software
- A imagem do resultado já está (`images/gdcount.png`) ✓
- Verificar se os links do GitHub e do `.exe` estão corretos

### 6. Parcerias
- Seção de parcerias existe no Google Sites mas não foi migrada
- Adicionar logos/nomes dos parceiros se quiser incluir

---

## Como fazer push de atualizações futuras

```
cd "H:\Meu Drive\Claude pesquisa\gdmaf-site"
git add -A
git commit -m "descrição da mudança"
git push
```

Se renomear o repositório, atualizar o remote:
```
git remote set-url origin https://github.com/gdmaf/gdmaf.github.io.git
```
