build:
	stack build
	cp .stack-work/install/x86_64-linux-ncurses6/lts-9.11/8.0.2/bin/*  .
	./cssgen > style.css
	./website build
	./cvPDF
	cd ./texCV && pdflatex danielbarter.tex
	cp ./texCV/danielbarter.pdf ./_site/CV.pdf

clean:
	./website clean
	rm style.css cssgen website cvPDF
	rm ./texCV/*.aux
	rm ./texCV/*.log
	rm ./texCV/*.pdf
	rm ./texCV/*.out
	rm ./texCV/CV.tex

