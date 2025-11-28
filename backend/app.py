from flask import Flask, send_from_directory, jsonify
import os

# 获取当前脚本所在目录
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
# 前端构建产物目录（相对于 backend/ 的上一级的 dist/）
DIST_DIR = os.path.join(BASE_DIR, '..', 'dist')

app = Flask(__name__, static_folder=os.path.join(DIST_DIR, 'assets'), static_url_path='/assets')

# ====== API 接口示例 ======
@app.route('/api/hello')
def hello_api():
    return jsonify({
        "message": "Hello from Flask Backend!",
        "time": "2025-11-20T12:00:00Z"
    })

# ====== 静态资源：favicon ======
@app.route('/favicon.ico')
def favicon():
    return send_from_directory(DIST_DIR, 'favicon.ico', mimetype='image/vnd.microsoft.icon')

# ====== 所有其他路由 fallback 到 index.html（支持 Vue Router history 模式）======
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    if path != "" and os.path.exists(os.path.join(DIST_DIR, path)):
        # 如果请求的是真实存在的静态文件（如 .js, .css, .png），直接返回
        return send_from_directory(DIST_DIR, path)
    else:
        # 否则返回 index.html，交给 Vue Router 处理
        return send_from_directory(DIST_DIR, 'index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)