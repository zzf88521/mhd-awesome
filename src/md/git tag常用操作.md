### 标签分类
git标签分为两种类型：轻量标签和附注标签。轻量标签是指向提交对象的引用，附注标签则是仓库中的一个独立对象，建议使用附注标签，日后还可以查看标签信息。

### 创建标签
- 创建轻量标签： `git tag v0.2.0 -light`
- 创建附注标记：`git tag -a v0.1.0 -m "release 0.1.0 version"`

解释：创建附注标签时，参数-a即annotated的缩写，指定标签类型，后附标签名。参数m指定标签说明，说明信息会保存在标签对象中。
### 查看标签
- 列出当前仓库的所有标签:`git tag`
- 列出符合模式的标签: `git tag -l 'v0.1.*'`
- 查看标签版本信息: `git show v0.1.0`
### 切换标签
- 切换标签与切换分支命令相同: `git checkout [tagname]`

解释：切换标签后处于一个空的分支上，即”You are in ‘detached HEAD’ state.”
### 删除标签
- 误打或需要修改标签时，需要先将标签删除，再打新标签: `git tag -d v0.1.2`

### 删除远程标签
https://blog.csdn.net/shines/article/details/8558293
git push origin :refs/tags/标签名  

解释：参数-d即delete的缩写，意为删除其后指定的标签。
### 补打标签
- 给指定的commit打标签: `git tag -a v0.1.0 49e0cd22f6bd9510fe65084e023d9c4316b446a6`

解释：打标签不必要在HEAD之上，也可在之前的版本上打，这需要你知道某个提交对象的校验和，通过git log命令获取。

### 发布标签
- 将v0.1.0标签提交到git服务器: `git push origin v0.1.0`

解释：通常的git push不会将标签对象提交到git服务器，我们需要进行显式的操作。
- 将本地所有标签一次性提交到git服务器: `git push origin –tags`
