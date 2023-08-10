# Async translate script
## kind of <word> - <translated word>

Use this command to use:
```bash
sh translate.sh --from <language1> --to <language2>
# or 
chmod +x translate.sh && ./translate.sh --from <language1> --to <language2>
```

### How to use:

1. Put your file/files in the **files** folder

2. 
```bash
sh translate.sh --from en --to ru
```

3. Wait Wait a bit and your files will be in the **translated** folder

### Example:

Source file:
```bash
# test.txt
apple
car
cactus
```

Translated file:
```bash
# test.txt
apple-яблоко
car-машина
cactus-кактус
```
