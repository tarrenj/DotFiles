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

" => Rainbow Parentheses
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

" Basic Lightline configuration
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

" Use decent keybindings, because I'm not a crazy person
nnoremap <c-h> <C-w>h
nnoremap <c-j> <C-w>j
nnoremap <c-k> <C-w>k
nnoremap <c-l> <C-w>l
