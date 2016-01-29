build:
	stack build
	cp .stack-work/install/x86_64-linux/lts-4.2/7.10.3/bin/* .
	./cssgen > style.css
	./website build

clean:
	./website clean
	rm -f style.css cssgen website
