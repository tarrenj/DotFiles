set nocompatible              " be iMproved, required
filetype off                  " required

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
" alternatively, pass a path where Vundle should install plugins
"call vundle#begin('~/some/path/here')

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'

" User Plugins
Plugin 'luochen1990/rainbow'
Plugin 'itchyny/lightline.vim'
Plugin 'preservim/nerdtree'
" Plugin 'ycm-core/YouCompleteMe'
" ^^ Removed until Vim w/ Python3.6 in Debian11

call vundle#end()            " required
filetype plugin indent on    " required

" Things I forget often
" ctrl + w c:   Close the things
" :w !diff % -: Show the diff between the current (unsaved) and saved version

" ctrl + w v:   Vertical split -- should be rebound to \
" ctrl + w s:   Horizontal split -- should be rebound to -

" ctrl + </>:  Expand left and right
" ctrl + +/-:  Expand up and down
" ctrl + w _:  Max hight of current split - Broken...
" ctrl + w |:  Max width of current split - Broken...
" ctrl + w =:  Normalize all splits - Broken...

" The actuall vimrc starts now.

" => VIM user interface

" Stop beeping!!
set noerrorbells
" Ignore case when searching
set ignorecase
" Highlight search results
set hlsearch
" Show matching brackets when text indicator is over them
set showmatch
" How many tenths of a second to blink when matching brackets
set mat=2
" Enable syntax highlighting
syntax enable
" Enable line numbers
set number
" Get outta here mode! Lightline is better then you!
set noshowmode
" Autoclose YCM preview split after inserting suggestion
autocmd CompleteDone * pclose

" => File Managment

" netrw Always tree
let g:netrw_liststyle=3
" netrw Bugger off banner!
let g:netrw_banner = 0
" Always NERDTree!
autocmd vimenter * NERDTree
autocmd VimEnter * wincmd p
" Kill if NERDTree is the only thing left
autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTree") && b:NERDTree.isTabTree()) | q | endif
" Close buffer if file deleted
let NERDTreeAutoDeleteBuffer = 1
" NERDTree Pretyfication
let NERDTreeMinimalUI = 1
let NERDTreeDirArrows = 1
" show hidden files
let NERDTreeShowHidden=1

" => Colors and Fonts

colorscheme desert
set background=dark

set colorcolumn=100
highlight ColorColumn ctermbg=8

" => Text, tab and indent related

" Use spaces instead of tabs
set expandtab

" Be smart when using tabs ;)
set smarttab

" 1 tab == 4 spaces
set shiftwidth=4
set tabstop=4

set ai "Auto indent
set si "Smart indent
set wrap "Wrap lines

" Fix backspace (add line wrap functionality)
set backspace=indent,eol,start

" => Rainbow Parentheses https://github.com/luochen1990/rainbow
let g:rainbow_active = 1

" => Moving around, tabs, windows and buffers

" Return to last edit position when opening files (You want this!)
autocmd BufReadPost *
     \ if line("'\"") > 0 && line("'\"") <= line("$") |
     \   exe "normal! g`\"" |
     \ endif

" => Status line
" Always show the status line
set laststatus=2

" Basic Lightline configuration https://github.com/itchyny/lightline.vim
let g:lightline = {
      \ 'colorscheme': 'jellybeans',
      \ 'active': {
      \   'left': [ [ 'mode', 'paste' ],
      \             [ 'gitbranch', 'readonly', 'filename', 'modified' ] ]
      \ },
      \ 'component_function': {
      \   'gitbranch': 'fugitive#head'
      \ },
      \ }

" YCM Python stuff
let g:ycm_python_interpreter_path = ''
let g:ycm_python_sys_path = []
let g:ycm_extra_conf_vim_data = [
  \  'g:ycm_python_interpreter_path',
  \  'g:ycm_python_sys_path'
  \]
let g:ycm_global_ycm_extra_conf = '~/builds/dotfiles/ycm_global_extra_conf.py'

" Use decent keybindings, because I'm not a crazy person
nnoremap <c-h> <C-w>h
nnoremap <c-j> <C-w>j
nnoremap <c-k> <C-w>k
nnoremap <c-l> <C-w>l

" Function to compare current buffer with saved file (:DiffSaved)
function! s:DiffWithSaved()
	let filetype=&ft
	diffthis
	vnew | r # | normal! 1Gdd
	diffthis
	exe "setlocal bt=nofile bh=wipe nobl noswf ro ft=" . filetype
endfunction
com! DiffSaved call s:DiffWithSaved()

" Don't move the cursor when clicking to restore focus
augroup NO_CURSOR_MOVE_ON_FOCUS
  au!
  au FocusLost * let g:oldmouse=&mouse | set mouse=
  au FocusGained * if exists('g:oldmouse') | let &mouse=g:oldmouse | unlet g:oldmouse | endif
augroup END
