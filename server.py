from bottle import static_file, route, run
@route('/static/<filename>')
def server_static(filename):
  return static_file(filename, root='./static')

run(host='localhost', port=8080, debug=True)
