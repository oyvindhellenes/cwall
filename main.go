package main

import (
	"flag"
	"fmt"
	"github.com/gorilla/websocket"
	"log"
	"net/http"
)

func main() {
	// command line flags
	port := flag.Int("port", 8000, "port to serve on")
	dir := flag.String("directory", "web/app", "directory of web files")
	flag.Parse()

	// handle all request by serving a file of the same name
	fs := http.Dir(*dir)
	handler := http.FileServer(fs)
	http.Handle("/", handler)

	log.Printf("Running on port %d\n", *port)

	addr := fmt.Sprintf("127.0.0.1:%d", *port)
	// this call blocks -- the program runs here forever
	err := http.ListenAndServe(addr, nil)
	fmt.Printf(err.Error())
}